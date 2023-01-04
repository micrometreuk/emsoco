export default function Home() {
  return (
    <>
      <div>
        <div style={{backgroundColor: "#088413",}}>
        <table 
        >
        <tbody>
          <tr>
            <td>NEXT_PUBLIC_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
            <td>{process.env.NEXT_PUBLIC_ENV_domainName}</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </>
  );
}