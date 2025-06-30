import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import TextC from './TextComponent';
import {
  defaultSwitch,
  globalFontStyles,
  monoBody,
  monoLabel,
} from '../../Assets/Styles/styles';
import Polygon from '../../Assets/images/svg/Polygon';
import Calandar from '../../Assets/images/svg/Calandar';
import Wheller from '../../Assets/images/svg/Vehicles/Whelller';
import BoxTruck from '../../Assets/images/svg/Vehicles/BoxTruck';
import MobileCrane from '../../Assets/images/svg/Vehicles/MobileCrane';
import CarTrailer from '../../Assets/images/svg/Vehicles/CarTrailer';
import ConcreteTruck from '../../Assets/images/svg/Vehicles/ConcreteTruck';
import GarbageTruck from '../../Assets/images/svg/Vehicles/GarbageTruck';
import PickupTruck from '../../Assets/images/svg/Vehicles/PickupTruck';
import Tanker from '../../Assets/images/svg/Vehicles/Tanker';
import Other from '../../Assets/images/svg/Vehicles/Other';
import Car from '../../Assets/images/svg/Vehicles/Car';
import Van from '../../Assets/images/svg/Vehicles/Van';
import PumpTruck from '../../Assets/images/svg/Vehicles/PumpTruck';
import FlatbedTruck from '../../Assets/images/svg/Vehicles/FlatbedTruck';
import UnicTruck from '../../Assets/images/svg/Vehicles/UnicTruck';
import RaisedFloorTrailor from '../../Assets/images/svg/Vehicles/RaisedFloorTrailor';
import RoughTarraineCrane from '../../Assets/images/svg/Vehicles/RoughTarraineCrane';
import LowerFloor from '../../Assets/images/svg/Vehicles/LowerFloor';
import ConcreteMixer from '../../Assets/images/svg/Vehicles/ConcreteMixer';
import FlatTruck from '../../Assets/images/svg/Vehicles/FlatTruck';
import { defaultDanger } from '../../Assets/Styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

type Data = {
  code?: 'string';
  id: number;
  name?: string;
  format?: string;
};

interface IProjectSwitch {
  data: any;
  onSelect: (item: Data) => void;
  value?: string | null;
  title?: string;
  propStyles?: any;
  type?: 'Calendar' | '';
  error?: string;
  a?: boolean;
  setIsOp?: React.Dispatch<React.SetStateAction<boolean>>;
  isO?: boolean;
}

const ICONS = {
  '18 Wheeler': Wheller,
  'Box Truck': BoxTruck,
  Other: Other,
  'Mobile Crane': MobileCrane,
  Tanker: Tanker,
  'Pump Truck': PumpTruck,
  'Garbage Truck': GarbageTruck,
  'Concrete Truck': ConcreteTruck,
  Van: Van,
  'Car + Trailer': CarTrailer,
  Car: Car,
  'Pickup Truck': PickupTruck,
  'Flatbed Truck': FlatbedTruck,
  'Raised Floor Trailer': RaisedFloorTrailor,
  'Low Floor Trailer': LowerFloor,
  'Concrete Mixer Truck': ConcreteMixer,
  '15t Flat Truck': FlatTruck,
  '10t Flat Truck': FlatTruck,
  '8t Flat Truck': FlatTruck,
  '4t Flat Truck': FlatTruck,
  '2t Flat Truck': FlatTruck,
  '15t Unic Truck': UnicTruck,
  '10t Unic Truck': UnicTruck,
  '8t Unic Truck': UnicTruck,
  '4t Unic Truck': UnicTruck,
  '16t Rough Terrain-Crane': RoughTarraineCrane,
  '25t Rough Terrain-Crane': RoughTarraineCrane,
  '50t Rough Terrain-Crane': RoughTarraineCrane,
  '65t Rough Terrain-Crane': RoughTarraineCrane,
};

const DataSwitch: FC<IProjectSwitch> = ({
  data,
  onSelect,
  value,
  title,
  propStyles,
  type,
  error,
  a,
  setIsOp,
  isO,
}) => {
  const [isOptions, setIsOptions] = useState(false);
  const { t } = useTranslation();
  const checkConstruction = (item: any) => {
    if (item?.vehicleType?.name) return t(`${item?.vehicleType?.name}`);
    if (item.id.id) return t(`${item.id.name}`);
    if (item.day) return t(`${item.day}`);
    if (item.format) return t(`${item.format}`);
    return item.name;
  };

  const checkVehicleImage = (item: string): JSX.Element => {
    const Component = ICONS[item as keyof typeof ICONS] as any;

    if (Component) {
      return <Component />;
    }

    return <></>;
  };

  return (
    <View style={{ ...propStyles }}>
      {title && (
        <TextC
          styles={{
            ...globalFontStyles.monoLabel,
            ...styles.title,
          }}>
          {title}
        </TextC>
      )}
      <View style={styles.projectSwitch}>
        <TouchableOpacity
          style={styles.dropDown}
          activeOpacity={0.8}
          onPress={
            a && setIsOp
              ? () => setIsOp(prev => !prev)
              : () => setIsOptions(prev => !prev)
          }>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {type == 'Calendar' ? <Calandar /> : <></>}
            {value && (title === 'Vehicle Type*' || 'Vehicle Type') ? (
              <View style={{ paddingVertical: 3.5, paddingRight: 11 }}>
                {checkVehicleImage(value)}
              </View>
            ) : (
              <></>
            )}
            <TextC
              styles={{
                ...globalFontStyles.monoLabel,
                ...styles.itemName,
              }}>
              {value && t(`${value}`)}
            </TextC>
          </View>
          <Polygon angle={isOptions || isO ? 180 : 0} width={12} height={8} />
        </TouchableOpacity>
        {(!!isOptions || isO) && !!data && (
          <View style={styles.dropdownContainer}>
            <ScrollView
              style={{
                maxHeight:
                  title === 'Vehicle Type*' || 'Vehicle Type' ? 160 : 120,
              }}>
              {data?.map((item: any, i: number) => {
                return (
                  <View style={styles.vehicleItem}>
                    {title === 'Vehicle Type*' || 'Vehicle Type' ? (
                      <View style={{ paddingVertical: 3.5, paddingLeft: 12 }}>
                        {checkVehicleImage(item?.vehicleType?.name)}
                      </View>
                    ) : (
                      <></>
                    )}

                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        onSelect(item);
                        a && setIsOp ? setIsOp(false) : setIsOptions(false);
                      }}>
                      <View style={styles.dropDownItem}>
                        <TextC
                          styles={{
                            ...globalFontStyles.monoLabel,
                            ...styles.itemName,
                          }}>
                          {checkConstruction(item)}
                        </TextC>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
        {(isOptions || isO) && data.length === 0 && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => { }}>
              <View style={styles.dropDownItem}>
                <TextC
                  styles={{
                    ...globalFontStyles.monoLabel,
                    ...styles.noItemName,
                  }}>
                  {t('NoResource')}
                </TextC>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TextC
        styles={{
          color: defaultDanger,
          zIndex: -1,
        }}>
        {error}
      </TextC>
    </View>
  );
};

export default DataSwitch;

const styles = StyleSheet.create({
  projectSwitch: {},
  dropDown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    width: '100%',
    backgroundColor: defaultSwitch,
    borderRadius: 2,
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 16,
    position: 'relative',
    zIndex: 100
  },
  dropdownContainer: {
    width: '100%',
    position: 'absolute',
    top: '100%',
    backgroundColor: defaultSwitch,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.46,
    shadowRadius: 2.62,
    elevation: 6,
    zIndex: 101,
  },
  dropDownItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
    width: '100%',
    backgroundColor: defaultSwitch,
    borderRadius: 2,
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 28,
  },
  itemName: {
    color: monoBody,
  },
  noItemName: {
    color: 'grey',
  },
  title: {
    color: monoLabel,
    marginBottom: 8,
  },
  vehicleItem: {
    display: 'flex',
    flexDirection: 'row',
  },
});
