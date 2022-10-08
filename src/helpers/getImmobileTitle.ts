import { Immobile } from "../types/immobile.type";

export function getImmobileTitleCard({ address}: Immobile) {
    let title = '';
    { address.route ? title = title + address.route : null }
    {address.route && address.district ? title = title + ', ' : null}
    { address.district ? title = title + address.district : null }
    return title;
}