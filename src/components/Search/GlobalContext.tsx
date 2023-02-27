import { createContext, useContext } from "react"

interface IFilter {
  _id: string,
  name: string,
  adults: number,
  children: number,
}
export type GlobalContent = {
  dataFilter: Array<IFilter>,
  handleAddRoom: (c: IFilter) => void,
  handleChangeDataRoom: (b:string, c: string) => void,
}
export const GlobalContext = createContext<GlobalContent>({
  dataFilter: [],
  handleAddRoom: () => {},
  handleChangeDataRoom: () => {},
})
export const useGlobalContext = () => useContext(GlobalContext)