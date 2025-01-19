import {create} from 'zustand';
import toast from 'react-hot-toast';
import {axiosInstance} from '../lib/axios';

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersloading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({isUsersloading: true});
        try {
            const res= await axiosInstance.get('/messages/users');
            set({users: res.data});
        } catch (error) {
            toast.error('Failed to fetch users');
        }finally{
            set({isUsersloading: false});
        }
        
    },

    getMessages: async (userId) => {
        set({isMessagesLoading: true});
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({messages: res.data});
        } catch (error) {
            toast.error('Failed to fetch messages');
        }finally{
            set({isMessagesLoading: false});
        }
    },

}));