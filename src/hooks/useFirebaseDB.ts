import React, { useEffect, useState } from "react";
import { compact } from "@deepakvishwakarma/ts-util";

declare global {
  var firebase: any;
}

const useInitApp = () => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBcPpDWoSwYTcB4jZjMygyFIKABBIlqINQ",
      authDomain: "decipher-db.firebaseapp.com",
      databaseURL: "https://decipher-db.firebaseio.com",
      projectId: "decipher-db",
      storageBucket: "decipher-db.appspot.com",
      messagingSenderId: "793000199384",
      appId: "1:793000199384:web:c767946ddeb9e0750b03ad",
      measurementId: "G-YVC97JL6V2",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    }
  }, []);
};
export const useFetchRecords = (table: string) => {
  const [records, setRecords] = useState<any>([]);
  useEffect(() => {
    firebase
      .database()
      .ref(`${table}/`)
      .on(
        "value",
        function (snapshot) {
          const notes = snapshot.val();
          notes && setRecords(compact(Object.values(notes)));
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
  }, []);
  return records;
};
export const useFetchRecord = (table: string, id: string = "xxx") => {
  const [record, setRecord] = useState<any>({});
  useEffect(() => {
    if (id) {
      firebase
        .database()
        .ref(`${table}/${id}`)
        .once(
          "value",
          function (snapshot) {
            console.log(snapshot.val());
            const data = snapshot.val() || {};
            setRecord(data);
          },
          function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
    }
  }, [id]);
  return record;
};
export default useInitApp;
