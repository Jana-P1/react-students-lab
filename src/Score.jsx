const Score = (props) => {
  return ( 
    <>
      {props.scores.map((scores, idx) =>
        <div key={idx}>
          Date: {scores.date}
          Score: {scores.score}
        </div>
      )}

    </>
  );
}

export default Score;