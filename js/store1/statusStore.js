import Reflux from 'reflux';
import actions from '../action1/actions'

export default class StatusStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            options: [],
            selected: undefined,
            editSelection: undefined,
            errorMsg: undefined
        };
        this.listenables = actions;

    }
    getInitialState() {
        return this.state;
    }

    updateState(newState, skipNotify = false) {
        state = newState;
        if (!skipNotify) {
            this.trigger(state);
        }
    }

    onErrorCheck() {
        this.setState({
            errorMsg: 'Insert an element'
        });
    }
onIsValid(option) {
   if (this.state.options.indexOf(option)>-1)
          {
            this.setState({
                errorMsg: option + 'is alreday in list'
            }); 
            return false;
          }
          return true;

}
    onAddOption(option) {
        let newOptions = this.state.options;
        newOptions.push(option);

        console.log('on Add');
        this.setState({
            options: newOptions,
            errorMsg: undefined
        });
    }
    onEditOption(option, newOption) {

        let index = this.state.indexOf(option);
        let newOptions = this.state.options;
        newOptions.splice(index, 1);
        if (newOptions.indexOf(newOption) > -1) {
            this.setState({
                errorMsg: 'This Option already Exist'
            });
            return;
        }
        else {
            newOptions = this.state.options;
            newOptions[index] = newOption;
            this.setState({
                options: newOptions
            });
        }
    }
    onDeleteOption(option) {
        let newOptions = this.state.options.filter(x => x!=option);
        this.setState({
            options: newOptions
        });
    }

}