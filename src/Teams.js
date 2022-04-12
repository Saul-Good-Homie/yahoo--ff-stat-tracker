import React, { Component } from "react";

export default class Teams extends Component {
  state = {
    pageTitle: "Teams",
    teamsCount: 10,
    teams: [],
  };

  render() {
    return (
      <div>
        <h3 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.CallApiClick}>
            Call API
          </button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Wins</th>
              <th>Loss</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  CallApiClick = async () => {
    try {
      let response = await fetch(
        `https://api.github.com/users/${"saul-good-homie"}`,
        {
          method: "GET",
        }
      );

      let APIteams = await response.json();
      console.log(APIteams);
    } catch (err) {
      console.log("Whoops!");
      console.log(err);
    }

    // this.setState({
    //   teams: APIteams,
    //});
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    {
      return this.state.teams.map((team, index) => {
        return (
          <tr key={team.id}>
            <td>{team.id}</td>
            <td>
              <img src={team.photo} alt="team logo" />
              <div></div>
            </td>
            <td>{team.name}</td>
            <td>{this.getPhoneToRender(team.phone)}</td>
            <td>{team.address.city}</td>
          </tr>
        );
      });
    }
  };
}
