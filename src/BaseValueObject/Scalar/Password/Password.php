<?php

namespace BaseValueObject\Scalar\Password;

use BaseValueObject\Scalar\ValueObject;

/**
 * Interface Password
 * @package BaseValueObject\Scalar\Password
 */
interface Password extends ValueObject
{
    /**
     * Create new instance based on a clean password.
     *
     * @param string $cleanPassword
     * @return Password
     */
    public static function byCleanPassword(string $cleanPassword): self;

    /**
     * Change the actual Password based on clean password.
     *
     * @param string $cleanPassword
     * @return Password
     */
    public function changePassword(string $cleanPassword): self;

    /**
     * Check if the clean password is valid (the same password).
     *
     * @param string $cleanPassword
     * @return bool
     */
    public function verify(string $cleanPassword): bool;
}
