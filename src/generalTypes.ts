interface Origin {
    name: string;
    url: string;
  }
export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export interface IEpisode{
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[]|object;
      url: string;
      created: string;
    }

  export interface IRadioItem{
    value:string;
    label:string
  }


  // ! error response

  interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Env;
    headers: Headers;
    method: string;
    url: string;
  }
  
  interface Headers {
    Accept: string;
  }
  
  interface Env {
  }
  
  interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
  }
 export interface IErrorResponse {
    message: string;
    name: string;
    stack: string;
    config: Config;
    code: string;
    status: number;
  }
  
 
  
  