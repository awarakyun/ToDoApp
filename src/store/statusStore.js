import Reflux from 'reflux';
import actions from '../action/actions'
import options from '../component/options';

export default class StatusStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            options: [],
            selected: undefined,
            editSelection: undefined,
            errorMsg: undefined
        };
        window.statusStore = this.state;
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
        let newOptions = this.state.options;
        this.setState( {
            errorMsg: 'Insert a word',
            options: newOptions
        });
      
    }

    onAddOption(option) {
        let newOptions = this.state.options;
        if(newOptions.indexOf(option)>-1)
        {
            this.setState({
                errorMsg: `${option} is alreday in list`,
                options: newOptions
            });

        }
        else{
        newOptions.push(option);
        this.setState({
            options: newOptions,
            errorMsg: undefined
        });
    }
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
        let newOptions = this.state.options.filter(x => x != option);
        this.setState({
            options: newOptions
        });
    }

}