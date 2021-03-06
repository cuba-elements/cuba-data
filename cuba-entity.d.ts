/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cuba-entity.html
 */

/// <reference path="cuba-data-loading-behavior.d.ts" />
/// <reference path="../cuba-app/cuba-app-aware-behavior.d.ts" />

/**
 * The `cuba-entity` element provides an ability to load specific entity by Id.
 */
interface CubaEntityElement extends Polymer.Element, CubaAppAwareBehavior, CubaDataLoadingBehavior {

  /**
   * Entity name as specified in domain model class via `@Entity` annotation e.g. sec$User
   */
  entityName: string|null|undefined;
  entityId: string|null|undefined;

  /**
   * Name of the [view](See https://doc.cuba-platform.com/manual-latest/views.html) which is used for loading entities.
   */
  view: string|null|undefined;
}

interface HTMLElementTagNameMap {
  "cuba-entity": CubaEntityElement;
}
