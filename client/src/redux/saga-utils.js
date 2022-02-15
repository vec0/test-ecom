import { takeLatest, put, all, call, delay } from "redux-saga/effects";

const PMS__ = (fn, back) =>
  new Promise((res, err) =>
    fn((data) => {
      back(data);
      res();
    }, err)
  );

/// ...args fix todo
export const PMS = (apply, fn, args = undefined) => {
  if (args !== undefined && Object.keys(args).length > 0)
    return new Promise((res, err) =>
      fn(
        args,
        (data) => {
          apply(data);
          res();
        },
        err
      )
    );
  else
    return new Promise((res, err) =>
      fn((data) => {
        apply(data);
        res();
      }, err)
    );
};

export function* ASC(fn) {
  //console.log("1");
  //yield delay(1000);
  let finalize = false;
  let result = false;
  const zxc = async (fn, back) => {
    let result = null;
    try {
      result = await fn();
      // console.log("ass " + result);
    } catch (err) {
      throw new Error(err);
    }
    back(result);
  };
  zxc(fn, (res) => {
    finalize = true;
    //console.log("2");
    result = res;
  });
  while (!finalize) yield delay(16);
  //console.log("3");
  return result;
}
