"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IWorkspaceDetails } from "../lib/Interfaces/IWorkspaceDetails";

export interface WorkspaceDetailsContextProp {
  workspaceDetails: IWorkspaceDetails[] | null;
  setWorkspaceDetails: React.Dispatch<
    React.SetStateAction<IWorkspaceDetails[] | null>
  >;
}

const WorkspaceDetailsContext =
  createContext<WorkspaceDetailsContextProp | null>(null);

const WorkspaceDetailsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [workspaceDetails, setWorkspaceDetails] = useState<
    IWorkspaceDetails[] | null
  >(null);

  //fetching data from github repo
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data fromgithub", data);

        setWorkspaceDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching workspace details:", error);
      });
  }, []);

  const value: WorkspaceDetailsContextProp = useMemo(
    () => ({
      workspaceDetails,
      setWorkspaceDetails,
    }),
    [workspaceDetails]
  );

  return (
    <WorkspaceDetailsContext.Provider value={value}>
      {children}
    </WorkspaceDetailsContext.Provider>
  );
};

const useWorkspaceDetails = () => {
  const context = useContext(WorkspaceDetailsContext);
  if (!context) {
    throw new Error(
      "useWorkspaceDetails context must be used within a WorkspaceDetailsProvider"
    );
  }
  return context;
};

export { WorkspaceDetailsProvider, useWorkspaceDetails };
