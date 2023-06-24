const mySqlToJson = (data: any) => {
  const checkIsString = JSON.stringify(data);
  const checksIsJSON = JSON.parse(checkIsString);
  return checksIsJSON[0];
};

const decompressedData = (data: any, username: string) => {
  const dataUser = data.find((user: any) => user !== username);
  return dataUser;
};

export { mySqlToJson, decompressedData };
