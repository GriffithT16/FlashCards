const CollectionContainer = (props) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(response.data.title);
    debugger;
    setCollections(response.data);
  };
  const displayCollections = (props) => {
    return (
      <div style={{ height: "15rem", width: "25rem", borderStyle: "solid" }}>
        {props.collections.map()}
      </div>
    );
  };

  return (
    <div style={{ height: "15rem", width: "25rem", borderStyle: "solid" }}>
      ${collections}
    </div>
  );
};

export default CollectionContainer;
