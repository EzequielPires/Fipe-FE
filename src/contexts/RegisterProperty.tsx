import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { useBoolean, useBooleanProps } from "../hooks/useBoolean";
import { useCheckBox, useCheckBoxProps } from "../hooks/useCheckBox";
import { useCount, useCountProps } from "../hooks/useCount";
import { useForm, useFormProps } from "../hooks/useForm";
import { useSelect, useSelectProps } from "../hooks/useSelect";
import { api } from "../services/api";
import { Immobile } from "../types/immobile.type";
import { adTypeData, conciergeData, furnitureData, keyTypeData, locationTypeData, propertyOccupationData, propertyRelationshipData, propertyTypeData } from "../utils/data";

interface RegisterPropertyContextProps {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    createImmobile: () => Promise<void>;
    uploadImage: (file: File) => Promise<void>
    uploadImages: (files: File[]) => Promise<void>

    //Selects
    propertyType: useSelectProps;
    adType: useSelectProps;
    concierge: useSelectProps;
    propertyOccupation: useSelectProps;
    propertyRelationship: useSelectProps;
    locationType: useSelectProps;
    keyType: useSelectProps;

    //CheckBox
    furniture: useCheckBoxProps;

    //Counts
    numberRooms: useCountProps;
    numberBathrooms: useCountProps;
    numberSuites: useCountProps;
    numberGarages: useCountProps;

    //Booleans
    pet: useBooleanProps;
    pool: useBooleanProps;
    roof: useBooleanProps;
    payIptu: useBooleanProps;

    //Forms
    cep: useFormProps;
    address: useFormProps;
    city: useFormProps;
    state: useFormProps;
    route: useFormProps;
    district: useFormProps;
    number: useFormProps;
    walk: useFormProps;
    complement: useFormProps;
    area: useFormProps;
    condominiumValue: useFormProps;
    iptuValue: useFormProps;
    propertyValue: useFormProps;
    thumbnail: File | null;
    photos: File[];
    setThumbnail: any;
    setPhotos: any;
}

const RegisterPropertyContext = createContext({} as RegisterPropertyContextProps);

const RegisterPropertyProvider = ({ children }: any) => {
    const router = useRouter();
    const { id } = router.query;

    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [photos, setPhotos] = useState<File[]>([]);

    //Selects
    const propertyType = useSelect();
    const adType = useSelect();
    const concierge = useSelect();
    const propertyOccupation = useSelect();
    const keyType = useSelect();
    const propertyRelationship = useSelect();
    const locationType = useSelect();

    //CheckBox
    const furniture = useCheckBox();

    //Forms
    const cep = useForm('cep');
    const address = useForm('address');
    const city = useForm('text');
    const state = useForm('text');
    const route = useForm('text');
    const district = useForm('text');
    const number = useForm('number');
    const walk = useForm('number');
    const complement = useForm('text');
    const area = useForm('text');
    const condominiumValue = useForm('text');
    const iptuValue = useForm('text');
    const propertyValue = useForm('text');


    //Counts
    const numberRooms = useCount({
        min: 1,
        max: 10
    });
    const numberBathrooms = useCount({
        min: 1,
        max: 10
    });
    const numberSuites = useCount({
        min: 0,
        max: numberRooms.value
    });
    const numberGarages = useCount({
        min: 0,
        max: 10
    });

    //Booleans
    const pet = useBoolean();
    const pool = useBoolean();
    const roof = useBoolean();
    const payIptu = useBoolean();

    const [step, setStep] = useState(1);

    const nextStep = async () => {
        switch (step) {
            case 1:
                if (propertyType.validate() && adType.validate() && locationType.validate() && route.validate() && number.validate() && district.validate() && city.validate() && state.validate()) {
                    setStep(step + 1);
                    window.scrollTo({ top: 0 });
                }
                break;

            case 2:
                if (
                    area.validate() &&
                    pet.validate() &&
                    pool.validate() &&
                    roof.validate() &&
                    concierge.validate() &&
                    propertyOccupation.validate() &&
                    keyType.validate() &&
                    propertyRelationship.validate() &&
                    locationType.validate()) {
                    setStep(step + 1);
                    window.scrollTo({ top: 0 });
                }
                break;

            case 3:
                if (condominiumValue.validate() && payIptu.validate() && iptuValue.validate()) {
                    setStep(step + 1);
                    window.scrollTo({ top: 0 });
                }
                break;
            case 4:
                if (propertyValue.validate()) {
                    if (!id) {
                        await createImmobile().then(() => {
                            step <= 5 && setStep(step + 1);
                            window.scrollTo({ top: 0 });
                        });
                    } else {
                        step <= 5 && setStep(step + 1);
                        window.scrollTo({ top: 0 });
                    }
                }
                break;
            case 5:
                step <= 5 && setStep(step + 1);
                window.scrollTo({ top: 0 });
                break;
        }
    };
    const prevStep = () => step > 1 && setStep(step - 1);

    useEffect(() => {
        propertyType.setOptions(propertyTypeData);
        adType.setOptions(adTypeData);
        keyType.setOptions(keyTypeData);
        concierge.setOptions(conciergeData);
        propertyOccupation.setOptions(propertyOccupationData);
        propertyRelationship.setOptions(propertyRelationshipData);
        furniture.setOptions(furnitureData);
        locationType.setOptions(locationTypeData);
    }, []);

    const uploadImage = async (file: File) => {
        const data = new FormData();
        data.append('file', file)
        const response = await api.post('upload/image', data).then(res => res.data);
        if (id && response.path) {
            const uploadResponse = await api.patch(`immobile/${id}`, {
                imageMain: response.path
            }).then(res => res.data);
        }
    }

    const uploadImages = async (files: File[]) => {
        const images = [];

        for (var file of files) {
            const data = new FormData();
            data.append('file', file);
            const response = await api.post('upload/image', data).then(res => res.data);
            images.push(response.path);
        }

        if (id && images.length > 0) {
            const uploadResponse = await api.patch(`immobile/${id}`, {
                images
            }).then(res => res.data);
            console.log(uploadResponse);
        }
    }

    const createImmobile = async () => {
        let immobile: Immobile = {
            adType: adType.value.enum,
            area: parseInt(area.value),
            concierge: concierge.value.enum,
            condominiumValue: condominiumValue.value,
            iptuValue: iptuValue.value,
            keyType: keyType.value.enum,
            numberBathrooms: numberBathrooms.value,
            numberGarages: numberGarages.value,
            numberRooms: numberRooms.value,
            numberSuites: numberSuites.value,
            payIptu: payIptu.state,
            pets: pet.state,
            pool: pool.state,
            propertyType: propertyType.value.enum,
            propertyValue: propertyValue.value,
            relationship: propertyRelationship.value.enum,
            roof: roof.state,
            stateProperty: propertyOccupation.value.enum,
            address: null
        };
        const response = await api.post('immobile', {
            ...immobile,
            zipcode: `${route.value}, ${number.value} - ${district.value}, ${city.value} - ${state.value}, Brasil`,
        }).then(res => res.data);
        console.log(response);
        router.replace(`/anunciar-imovel/${response.id}`);
    }

    return (
        <RegisterPropertyContext.Provider value={{
            step,
            nextStep,
            prevStep,
            createImmobile,
            uploadImage,
            uploadImages,

            propertyType,
            adType,
            concierge,
            keyType,
            locationType,
            propertyOccupation,
            propertyRelationship,
            furniture,

            numberRooms,
            numberBathrooms,
            numberSuites,
            numberGarages,

            pet,
            pool,
            roof,
            payIptu,

            cep,
            address,
            city,
            state,
            route,
            district,
            number,
            walk,
            complement,
            area,
            condominiumValue,
            iptuValue,
            propertyValue,
            thumbnail,
            photos,
            setThumbnail,
            setPhotos,
        }}>
            {children}
        </RegisterPropertyContext.Provider>
    )
}

const useRegisterProperty = () => {
    const context = useContext(RegisterPropertyContext);

    return context;
}

export {
    useRegisterProperty,
    RegisterPropertyProvider
}