export default function ChangeRating({score}) {
    return (
        <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={score}
            onChange={(e) => {
                if (e.target.value > 5)
                    return alert("Números del 0 al 5 contando decimales :)");
                return score;
            }}
        />
    );
}
