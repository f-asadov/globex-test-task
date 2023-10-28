import Card from '../card/card'
import './wrapper.css'
import React, { useState } from 'react'
import Modal from '../modal/modal';
import axios from 'axios';
import { User } from '../../types/types';
import { BACKEND_URL } from '../../constants/url.constants';





const Wrapper = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User>()
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onCardClick = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setSelectedUser(undefined);
    setIsModalOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

  };


  const searchMatches = () => {
    axios.get(`${BACKEND_URL}${searchTerm}`).then((res) => setData(res.data))
    window.history.pushState(null, '', `?term=${searchTerm}`);
  }



  React.useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const searchTermFromUrl = params.get("term");
    console.log(searchTermFromUrl);

    if (searchTermFromUrl !== null) {
      setSearchTerm(searchTermFromUrl);
      window.history.pushState(null, '', `?term=${searchTerm}`);
      axios.get(`${BACKEND_URL}${searchTermFromUrl}`).then((res) => setData(res.data));
    }
    else{
      window.history.pushState(null, '', `?term=`);
      axios.get(BACKEND_URL).then((res) => setData(res.data));
    }



  }, [])



  return (
    <div className="wrapper">
      <div className="search-input-wrapper">
        <input className="search-input" type="text" value={searchTerm} onChange={handleInputChange} />
        <img src={require("../../images/search.png")} alt="Search" className="search-icon" onClick={searchMatches} />
      </div>
      <div className="search-result">
        {data.map((item: User, index: number) => {
          return <Card name={item.name} phoneNumber={item.phone} email={item.email} onCardClick={() => onCardClick(item)} key={index} />
        })}


      </div>

      {isModalOpen && <Modal user={selectedUser} onCloseModal={onCloseModal} />}
    </div>
  );
};



export default Wrapper