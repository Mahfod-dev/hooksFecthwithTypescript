import { Post, Props } from '../../interfaces/Post';
import { getSliceMethods } from '../helpers/sliceArray';

export const PostDetails = ({ data }: Props) => {
	return (
		<>
			{data?.slice(0, 20).map((list) => {
				return <li key={list.id}>{list.title}</li>;
			})}
		</>
	);
};
