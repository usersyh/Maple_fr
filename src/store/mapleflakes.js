import {create} from 'zustand';

const useMapleflakeStore = create((set) => ({

    isShow: true,
    change: () => set((state) => ({isShow: !state.isShow})),
}));


export default useMapleflakeStore;  