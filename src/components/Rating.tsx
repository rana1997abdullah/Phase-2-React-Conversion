interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        className="bi bi-star-fill"
        style={{ color: i <= rating ? "#f08804" : "gray" }}
        key={i}
      ></i>
    );
  }
  return (
    <div
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-title="Tooltip on right"
    >
      {stars}
    </div>
  );
};

export default Rating;
