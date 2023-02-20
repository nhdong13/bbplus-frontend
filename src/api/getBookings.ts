import Api from "./api"

export const getBookings = async () => {
  return await Api.get(
    `${import.meta.env.STAGING_URL}/`
  )
};
