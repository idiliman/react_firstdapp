// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// contract PersonData {

//    struct Person {
//     string name;
//     string gender;
//    }

//     Person[] public persons;

//     mapping (uint => address) public personToOwner;

//     function getPerson(string memory _name, string memory _gender) public {
//       uint id = persons.push(Person(_name, _gender))
//       personToOwner[id] = msg.sender
//     }

//     function getPerson() public {}
// }

//  uint private _ids;

    // struct UserDetails {
    //     uint256 id;
    //     string title;
    // }

    // mapping (address => UserDetails[]) public users;
    // mapping (address => uint256) public userDetails; 

    // function createPost(string memory _title) public {
    //     _ids++;
    //     users[msg.sender].push(UserDetails(_ids, _title));
    //     userDetails[msg.sender] = users[msg.sender].length;
    // }

    //

contract MoodDiary {
    
    //create a variable called mood
    string mood;
    
    //create a function that writes a mood to the smart contract
    function setMood(string memory _mood) public{
        mood = _mood;
    }
    
    //create a function the reads the mood from the smart contract
    function getMood() public view returns(string memory){
        return mood;
    }
}
