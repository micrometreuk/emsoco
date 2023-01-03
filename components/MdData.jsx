import { getSortedPostsData } from '../lib/utils';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function MdData({ allPostsData }) {
  return (
    <>
      <div>
        <ul style={{
          color: "#fff",
          backgroundColor: "#088413",
          border: "1px solid #088413",
          fontSize: 24,
          fontWeight: "bold",
          letterSpacing: 1,
          borderRadius: 4,
          padding: "4px 6px",
          display: "inline-block",
          position: "relative",
          top: -2,
          marginLeft: 10,
          lineHeight: 1,

        }}>
          {allPostsData.map(({
            id,
            domainName,
            companyName,
            local,
            email,
            phone,
            logoUrl,
            address
          }) => (
            <li
              key={id}>
              {domainName}
              <br />
              {companyName}
              <br />
              {local}
              <br />
              {email}
              <br />
              {phone}
              <br />
              {logoUrl}
              <br />
              {address}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}