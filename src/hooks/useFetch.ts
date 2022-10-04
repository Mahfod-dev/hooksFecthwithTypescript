import { Post } from './../../interfaces/Post';
import { useEffect, useState } from 'react';

interface POST {
	isLoading: boolean;
	data: Post[];
	error: null;
}

export const useFetch = (url: string): POST => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleFecthPost = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const postData = await response.json();

			setData(postData);
			setIsLoading(false);
		} catch (error: any) {
			setError(error.message);
		}
	};

	useEffect(() => {
		handleFecthPost();
	}, []);

	return {
		data,
		isLoading,
		error,
	};
};
