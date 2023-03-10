import { getQiitaRequest } from "./service/request";

const main = async () => {
  console.log("Hello World");
  const res = await getQiitaRequest(
    "https://qiita.com/api/v2/users/tsukasaI/items"
  );
  console.log(res);
};

main();
