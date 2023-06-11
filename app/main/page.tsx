export default function Home() {
  return (
    <p>
      The Distributed Storage System microservices is an application that stores files in shards. Basically the 
      file gets split into different chunks and gets uploaded to diffreent buckets. The main function that does this 
      sharding and merging the file is done by two different microservices.
    </p>
  )  
}
