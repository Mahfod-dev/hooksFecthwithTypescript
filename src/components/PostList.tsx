import { useFetch } from '../hooks/useFetch';
import { PostDetails } from './PostDetails';

const url = `https://jsonplaceholder.typicode.com/posts`;

const PostList = () => {
	const { data, isLoading, error } = useFetch(url);

	if (isLoading) {
		return <h1>...Loading</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<PostDetails data={data} />
		</>
	);
};
export default PostList;
