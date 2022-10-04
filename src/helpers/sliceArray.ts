import { Post, Props } from '../../interfaces/Post';

export const getSliceMethods = (data: Props, slice: number) => {
	// if(!arr) return
	const newArr = data.data.slice(0, slice);
	return newArr;
};
