export function WinnerModal({ winner }) {
  return (
    <>
      <p>Felicitaciones</p>
      <div className="border-8 rounded-md border-red-500 h-16 w-16 mt-2 text-center flex justify-center items-center">
        <p>{winner}</p>
      </div>
      <p>es el ganador</p>
    </>
  );
}
