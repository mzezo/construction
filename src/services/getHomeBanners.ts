
import { useQuery } from "react-query";
import { getData } from "./getData";

export const fetchHomeBanners = async ({ queryKey }: any, locale: string) => {
	const [_key, _params] = queryKey;
	const resData = await  getData(`/home-banners?populate=*&locale=${locale}`);
	const { data } = resData;
	return data?.data as any[] ;
};
export const useHomeBannersQuery = (options: any, locale: string) => {
	return useQuery<any[], Error>(
		['HomeBanners',options, locale],
		(data) => fetchHomeBanners(data, locale)
	);
};