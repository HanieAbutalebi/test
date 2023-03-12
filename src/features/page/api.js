import axios from "axios";

export const fetchSearchResult = async ({userInput,pageNumber}) =>{
  const response = await axios.get( "https://zarebin.ir/gse/api/search/",
    {
    params: {
      q:userInput,
      query_source:"user",
      page:Number(pageNumber),
    },
    });
  console.log(response);
  return response.data.result.all.results.webs;
}


