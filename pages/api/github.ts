import { NextApiRequest, NextApiResponse } from "next";

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    "https://api.github.com/repos/CreateBaseNZ/help-articles/contents/articles"
  );
  const json = await response.json();
  return res.status(200).json(json);
};

export default api;
