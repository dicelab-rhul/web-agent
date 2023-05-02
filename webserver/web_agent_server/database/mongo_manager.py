from pymongo import MongoClient
from pymongo.database import Database
from pymongo.collection import Collection
from typing import Any, Dict, cast
from json import load
from time import time_ns
from pyoptional.pyoptional import PyOptional


class MongoManager():
    def __init__(self) -> None:
        self.__db_data: dict[str, str|int] = MongoManager.__load_db_data()
        self.__client: MongoClient[Dict[str, Any]] = self.__create_client()

    @staticmethod
    def __load_db_data() -> dict[str, str|int]:
        try:
            with open("db_data.json", "r") as file:
                return load(file)
        except Exception:
            raise IOError("Error loading the database metadata.")

    def __create_client(self) -> MongoClient[Dict[str, Any]]:
        try:
            return MongoClient(
                host=cast(str, self.__db_data["hostname"]),
                port=cast(int, self.__db_data["port"]),
                username=cast(str, self.__db_data["username"]),
                password=open(cast(str, self.__db_data["db_password_file"]), "r").read(),
                authMechanism=cast(str, "SCRAM-SHA-256")
            )
        except Exception:
            raise ConnectionError("Error connecting to the database.")

    def get_client(self) -> MongoClient[Dict[str, Any]]:
        return self.__client

    def get_database(self) -> Database[Dict[str, Any]]:
        return self.__client[cast(str, self.__db_data["db_name"])]

    def get_csp_reports_collection(self) -> Collection[Dict[str, Any]]:
        return self.get_database()[cast(str, self.__db_data["csp_reports_collection"])]

    def get_coop_reports_collection(self) -> Collection[Dict[str, Any]]:
        return self.get_database()[cast(str, self.__db_data["coop_reports_collection"])]

    def get_coep_reports_collection(self) -> Collection[Dict[str, Any]]:
        return self.get_database()[cast(str, self.__db_data["coep_reports_collection"])]

    def add_csp_report(self, report: dict[str, Any]) -> None:
        self.__add_report(report, self.get_csp_reports_collection())

    def add_coop_report(self, report: dict[str, Any]) -> None:
        self.__add_report(report, self.get_coop_reports_collection())

    def add_coep_report(self, report: dict[str, Any]) -> None:
        self.__add_report(report, self.get_coep_reports_collection())

    def __add_report(self, report: Dict[str, Any], collection: Collection[Dict[str, Any]]) -> None:
        report["timestamp"] = time_ns()

        if collection.count_documents({}) >= cast(int, self.__db_data["max_reports"]):
            oldest: PyOptional[Dict[str, Any]] = PyOptional.of_nullable(collection.find_one({}, sort=[("timestamp", 1)]))

            oldest.if_present(lambda doc: collection.delete_one({"_id": doc["_id"]}))

        collection.insert_one(report)

    def get_csp_reports(self) -> list[Dict[str, Any]]:
        return self.__get_reports(self.get_csp_reports_collection())

    def get_coop_reports(self) -> list[Dict[str, Any]]:
        return self.__get_reports(self.get_coop_reports_collection())

    def get_coep_reports(self) -> list[Dict[str, Any]]:
        return self.__get_reports(self.get_coep_reports_collection())

    def __get_reports(self, collection: Collection[Dict[str, Any]]) -> list[Dict[str, Any]]:
        return list(collection.find({}, {"_id": 0}).sort("timestamp", -1).limit(cast(int, self.__db_data["max_reports"])))

    def close(self) -> None:
        self.__client.close()
