//
//  EntityMapper.ts
//
//  Created by Nolan Huang on 16 Jul 2022.
//  Copyright 2022 Vircadia contributors.
//  Copyright 2022 DigiSomni LLC.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import {
    Color3,
    Quaternion,
    Vector3
} from "@babylonjs/core";

import { IVector3Property, IQuaternionProperty, IColorProperty } from "../EntityProperties";
import { IEntity } from "../Entities";


/* eslint-disable new-cap */
export class EntityMapper {

    // NOTE:
    // Vercadia is right hand side coordinate system
    // babylon.js is left hand side
    public static mapToVector3(vec? : IVector3Property) : Vector3 {
        return vec ? new Vector3(-vec.x, vec.y, vec.z) : Vector3.Zero();
    }

    public static mapToQuaternion(q? : IQuaternionProperty) : Quaternion {
        return q ? new Quaternion(q.x, -q.y, -q.z, q.w) : Quaternion.Identity();
    }

    public static mapToColor3(c?: IColorProperty) : Color3 {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        return c ? new Color3(c.red / 255, c.green / 255, c.blue / 255) : Color3.White();
    }

    public static getEntityName(props: IEntity) : string {
        return props.name ?? props.type + "_" + props.id;
    }
}
