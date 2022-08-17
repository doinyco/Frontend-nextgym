import axios from "axios";

export function getSavedPlaces(user_id, cb, context) {
    axios.get(`https://my-next-gym.herokuapp.com/user/${user_id}/places`)
        .then((response) => {
            const places = response.data.places.map((place) => {
                const nplace = {
                    "place_id": place.place_id,
                    "maps_place_id": place.maps_place_id,
                    "name": place.name,
                    "lat": place.lat,
                    "lon": place.lon};
                return nplace;
            });
            cb(places, context)
        }).catch((error) => {
            console.log("Oh no!", error)
        });
}

export function getHistories(user_id, cb, context) {
    axios.get(`https://my-next-gym.herokuapp.com/user/${user_id}/histories`)
        .then((response) => {
            const histories = response.data.histories.map((history) => {
                const h = {
                    "history_id": history.history_id,
                    "date": history.date,
                    "comments": history.comments,
                    "mood": history.mood,
                    "place_name": history.place_name,
                    "time_spent": history.time_spent,
                };
                return h;
            });
            cb(histories, context)
        }).catch((error) => {
            console.log("Oh no!", error)
        });
}

export function addFavoritePlace(user_id, place, cb) {
    console.log("adding place", place)

    axios.post(`https://my-next-gym.herokuapp.com/places`, {
        "name": place.name,
        "lat": place.lat,
        "lon": place.lon,
        "maps_place_id": place.maps_place_id,
        "user_id": user_id
      })
      .then(function (response) {
        console.log("added", response);
        if (cb !== null) {
            cb({
                "place_id": response.data.place_id,
                "maps_place_id": response.data.maps_place_id
            })
        }
      })
      .catch(function (error) {
        console.log("addFavoritePlaceHelper axios error", error);
      });
}

export function addHistory(user_id, history, cb) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const current = new Date();
    const date = monthNames[current.getMonth()] + " " + current.getDate() + " " + current.getFullYear()

    axios.post(`https://my-next-gym.herokuapp.com/histories`, {
        "user_id": user_id,
        "place_name": history.place_name,
        "date": date,
        "time_spent": history.time_spent,
        "mood": history.mood,
        "comments": history.comments,
    }).then(function (response) {
        if (cb !== null) {
              cb(null)
        }
      }).catch(function (error) {
        console.log("addFavoritePlaceHelper axios error", error);
      });
}

export function removeFavoritePlace(user_id, place_id) {
    console.log("deleting place", place_id)
    
    axios.delete(`https://my-next-gym.herokuapp.com/places`, {"data": {
        "place_id": place_id,
        "user_id": user_id
    }}).catch(function (error) {
        console.log("removeFavoritePlace axios error", error);
    });
}