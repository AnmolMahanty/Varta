import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filterUsers);
  } catch (error) {
    console.log("error in getUsersForSidebar controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: senderId },
            ],
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("error in getMessages controller", error.message);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const sendMessage = async (req, res) => {
    try {
        const{text,image}=req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        let imageurl;
        if(image){
            const uploadedImage = await cloudinary.uploader.upload(image)
            imageurl = uploadedImage.secure_url
        }

        const newmessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageurl
        });

        await newmessage.save();

        //todo real time fuctionality goes here (socket.io)
        res.status(200).json(newmessage);

    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
