import { atom } from "recoil";

export const univState = atom<string>({
  key: "univState",
  default: "충북대학교",
});
