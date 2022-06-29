import clsx from 'clsx';
import { useState } from 'react';
import FiltersContainer from '../filters-container/filters-container';
import './table-column-title.scss';

function TableColumnTitle({
  className,
  name,
  filtersGroup,
  setFilter,
  displayDropdown,
  setDisplayDropdown,
  children,
}) {
  const iconClassName = filtersGroup.find((filter) => filter.checked === true)
    ? 'icon-green'
    : '';

  const onClickHandler = (event) => {
    if (event.target.className.includes('table-header__column'))
      setDisplayDropdown((state) => !state);
  };

  return (
    <div
      className={clsx('table-header__column', className)}
      onClick={onClickHandler}
    >
      <div className={clsx('icon', iconClassName)}></div>
      {displayDropdown && (
        <FiltersContainer
          name={name}
          filtersGroup={filtersGroup}
          setFilter={setFilter}
        />
      )}
      {children}
    </div>
  );
}

export default TableColumnTitle;
