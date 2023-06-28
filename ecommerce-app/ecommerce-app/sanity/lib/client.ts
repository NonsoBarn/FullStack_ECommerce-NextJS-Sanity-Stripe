import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skJ1M7gxMXLO9CRmKE5NaeZpZwisEGu8S2PMVkZCnHEGbJDGIJpp0hS0jOZ4qic4IN7eYpANrkrvU1Sthcpm5M3YlgXzC2LyNUPv0ohU9AuB5ZtyypNGclKqO4n1i6QyMWFrEPYsbp8OBh2LZXc0q8YraxtbaC3X9Q2mhfdNiPxN10MW1uZw",
})
