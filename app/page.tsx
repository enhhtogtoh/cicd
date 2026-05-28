// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-5xl font-bold">CI/CD test</h1>

//       <p className="mt-4 text-gray-600">GitHub Actions + Vercel ajillaj bn</p>

//       <button className="mt-6 px-6 py-3 rounded-lg bg-black text-white">
//         Deploy Test
//       </button>
//     </main>
//   );
// }

// export default function Home() {
//   const user: any = null;

//   return (
//     <main className="min-h-screen flex items-center justify-center">
//       <div>
//         <h1> Bug test</h1>

//         <p>{user.name}</p>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  const user= { name: "Tok" };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1> Fixed test</h1>

        <p>{user.name}</p>
      </div>
    </main>
  );
}
