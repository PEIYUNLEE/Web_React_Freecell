import PokerCard from '../../../lib/PokerCard';
import styles from '../../TableBlock/style.scss';
import OverTable from './OverTable';

interface MyProps {
    overLayout: PokerCard[][]
    handleCardMove: (from: string, to: string, fromIndex: number, toIndex: number) => void,
    children?: React.ReactNode,
}

function OverTableList(props: MyProps) {
    const { overLayout, handleCardMove } = props

    return (
        <div className={`${styles.tablelist} ${styles.tablelist_right}`}>
            {overLayout.map((item: PokerCard[], index: number) => {
                const propsToOverTable = {
                    overLayout: item,
                    tableIndex: index,
                    handleCardMove: handleCardMove,
                }
                return <OverTable key={"overtable_" + index} {...propsToOverTable} />
            })}
        </div>
    );
}

export default OverTableList;