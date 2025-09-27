import { useState } from "react";
import css from "./App.module.css";
import { CafeInfo } from "../CafeInfo/CafeInfo";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";
import { Notification } from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes";

export const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // ✅ Оновлення голосів
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes: Votes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // ✅ Скидання голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // ✅ Обчислення статистики
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

       {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};





