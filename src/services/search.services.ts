import axios from 'axios';
import { Search } from '../interfaces/search.interface';
import * as cheerio from 'cheerio';
class SearchGoogle {

    private search: Search[]

    constructor() {
        this.search = [];
    }
    async findByGoogle(query: string) {
        try{
            const response = await axios.get(`https://google.com.br/search?q=${query}`);
            this.search = [];
            const $ = cheerio.load(response.data);
            $('div').each((index, element) => {
                const title = $(element).find('h3').text();
                const link = $(element).find('div > a').attr('href');
                this.search.push({
                    title,
                    link
                })
            });

            this.search = this.search.filter((item: any) => {
                return item.title !== '' && item.link !== undefined;
            });

            this.search = this.search.map((item: any) => {
                return {
                    title: item.title,
                    link: item.link.replace('/url?q=', '')
                }
            });

            this.search = this.search.map((item: any) => {
                return {
                    title: item.title,
                    link: item.link.split('&')[0]
                }
            });

            this.search = this.search.filter((item: any, index: any) => {
                return this.search.findIndex((item2: any) => item2.title === item.title) === index;
            });
            
            this.search.shift();
            
            return this.search;
    }
    catch(err){
        console.log(err);
    }
    }

}

export { SearchGoogle };