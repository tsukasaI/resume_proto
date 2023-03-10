import axios from "axios";
import { QiitaUserItems } from "@/model/qiita";

export const getQiitaRequest = async (
  url: string
): Promise<QiitaUserItems[] | undefined> => {
  try {
    const response = (await axios.get(url)) as QiitaUserItems[];
    return response;
  } catch (e) {
    console.error(e);
    return;
  }
};
