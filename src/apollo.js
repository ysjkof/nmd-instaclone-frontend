import { makeVar } from "@apollo/client";

// 이 파일은 react variable를 가지고 있을 파일이다.

// makeVar(여기에 기본값을 넣으면 됨.)
export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
