import CardViewer from "./CardViewer";




export default function Card(props) {

    useEffect(() => {
        fetchCards();
      }, [props.selectedCollection]);

  return (
    <div className="border-box-card">
        <CardViewer cards={cards} />
    </div>
  )
}
