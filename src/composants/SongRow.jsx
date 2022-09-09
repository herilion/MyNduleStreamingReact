
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Row,
    Card,
    Col,
} from "react-bootstrap";
import { useState, useEffect } from 'react'
// import { application } from "express";
const CLIENT_ID = "af27c3b99f1944b285e63baa7b33c5f3";
const CLIENT_SECRET = "dd6f1c4b77b8498193d77dd0aa26b511"
function SongRow() {
    const [searchInput, setSearchInput] = useState("");
    const [artistID, setArtistID] = useState("Fally");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        //Acces au Token de l'API
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then((data) => {
                setAccessToken(data.access_token)
                search()
            })
        // .then(result => console.log(result))
    }, [artistID]);
    //Recherche
    function search() {
        // console.log("search for " + searchInput)
        console.log(accessToken)
        // Artist ID
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + accessToken
            }
        }
        fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then((data) => {
                setArtistID(data.artists.items[(0, 1)].id)
            });
        fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album,track,artist', searchParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.albums.items);
            })
    }

    return (
        <div className="App">
            <Container>
                <InputGroup className="mb-1" size="lg">
                    <FormControl
                        placeholder="Search for Artist"
                        type="input"
                        onKeyDown={(event) => {
                            if (event.key == "enter") {
                                search()
                            }
                        }}
                        onChange={(event) => {
                            setSearchInput(event.target.value); {
                                search();
                            }
                        }}
                    />
                    <Button onKeyDown={search}>
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className="mx-4 p-1 rows-cols-3 w-100">
                    {albums.map((album, i) => {
                        console.log(album);
                        return (
                            <Card className="shadow-sm p-2 ml-2 m-2 bg-primary  w-300" style={{ width: "250px" }}>
                                <Card.Img src={album.images[0].url} />
                                <Card.Body>
                                    <Card.Title> {album.name} </Card.Title>
                                </Card.Body>
                                <iframe
                                    style={{ borderRadius: "12px" }}
                                    src={
                                        "https://open.spotify.com/embed/album/" +
                                        album.id + "?utm_source=generator"
                                    }
                                    width="220"
                                    height="240"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media;fullscreen; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            </Card>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default SongRow;