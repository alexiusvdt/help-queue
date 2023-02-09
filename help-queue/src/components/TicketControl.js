import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import TicketList from "./TicketList";
import EditTicketForm from './EditTicketForm';

class TicketControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null
    };
  }
  // this callback is passed under the param newTicket when we call props.onNewTicketCreation({names: names.value...}) 
  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                    formVisibleOnPage: false });
  }

  handleChangingSelectedTicket = (id) => {
    //filter returns an array, so we need to specify the [0] element
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null,
      editing: false
    });
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
        mainTicketList: editedMainTicketList,
        editing: false,
        selectedTicket: null
      });
  }

  handleEditClick = () => {
    // console.log("HandleEditClick reached!")
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedTicket != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });  
    } else {}
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "return to ticket list"
    }else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail
       ticket = {this.state.selectedTicket} 
       onClickingDelete = {this.handleDeletingTicket}
       onClickingEdit = {this.handleEditClick} />
      buttonText= "Return to ticket list"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation = {this.handleAddingNewTicketToList} />
      buttonText = "Return to ticket list";
    } else {
      currentlyVisibleState = <TicketList ticketList = {this.state.mainTicketList} onNewTicketSelection={this.handleChangingSelectedTicket}/>;
      buttonText = "Add ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;