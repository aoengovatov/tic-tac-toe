import PropTypes from 'prop-types';
import { Component } from 'react';
import { Icon } from '../icon/Icon';

class BoardItemLayout extends Component {
    render() {
        const { value, ...props } = this.props;

        return (
            <div
                className="flex items-center justify-center w-[100px] h-[100px] border-2 border-solid border-gray-900 rounded-lg m-[5px] bg-zinc-800 hover:border-blue-900"
                {...props}
            >
                {value !== '' ? <Icon value={value} /> : ''}
            </div>
        );
    }
}

export class BoardItem extends Component {
    render() {
        const { id, value, ...props } = this.props;

        return <BoardItemLayout value={value} {...props} />;
    }
}

BoardItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
};
