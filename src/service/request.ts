import axios from "axios";
import { QiitaUserItems } from "../model/qiita";

export const getQiitaRequest = (
  url: string
): Promise<QiitaUserItems[] | undefined> => {
  const result = getRequest<QiitaUserItems[]>(url);
  return result;
};

// これinterface化する
export const getRequest = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = (await axios.get(url)) as T;
    return response;
  } catch (error) {
    console.error(error);
    return;
  }
};
